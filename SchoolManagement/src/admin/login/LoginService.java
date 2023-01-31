package admin.login;
import global.persistantDB.config.HibernateSessionFactory;
import org.json.simple.JSONObject;
import java.sql.Timestamp;
import java.util.List;
import java.util.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import admin.LoginDAO;
import appadmin.staff.StaffModel;
import appadmin.student.StudentModel;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class LoginService {
    LoginDAO dao=new LoginDAO();
    @SuppressWarnings("unchecked")
public JSONObject userLogin(String userName,String password,String loginTypeFlag){
    JSONObject resultObj = new JSONObject();
    String pwd=null;
    String userId=null;
    Integer userLoginId=null;
    Boolean resultFlag=false;
    try {
        Session session=HibernateSessionFactory.getSession();	
        Transaction trans = session.beginTransaction();
if(loginTypeFlag.equalsIgnoreCase("1")){
        String SQL_QUERY ="from AdmUser as user where user.userLoginId='"+userName+"' and user.loginStatusFlag=0 ";
        Query query = session.createQuery(SQL_QUERY);
             
        for(Iterator<?> i=query.iterate();i.hasNext();)
        {
            AdmUser adminUser=(AdmUser)i.next();
            pwd=adminUser.getPassword();	
            userId=adminUser.getUserId().toString();
            userLoginId=adminUser.getUserId();           
        }	
    }
else if(loginTypeFlag.equalsIgnoreCase("2")){
        String SQL_QUERY ="from StaffModel as staff where staff.firstName='"+userName+"' and staff.deleteFlag=0 and staff.emailId='"+password+"' ";
        Query query = session.createQuery(SQL_QUERY);
        for(Iterator<?> i=query.iterate();i.hasNext();)
        {
            StaffModel staff=(StaffModel)i.next();
            pwd=staff.getEmailId();	
            userId=staff.getFirstName();
            userLoginId=staff.getStaffId();                   
        }	
    }

else if(loginTypeFlag.equalsIgnoreCase("3")){
        String SQL_QUERY ="from StudentModel as student where student.firstName='"+userName+"' and student.deleteFlag=0 and student.emailId='"+password+"' ";
        Query query = session.createQuery(SQL_QUERY);
        for(Iterator<?> i=query.iterate();i.hasNext();)
        {
            StudentModel student=(StudentModel)i.next();
            pwd=student.getEmailId();	
            userId=student.getFirstName();  
            userLoginId=student.getStudentId();                 
        }	
    }

     if(userId==null || userId.equals(null) || userId.equals(""))
        {
          resultObj.put("data","userName is Invalid");
          resultObj.put("status", "failure");
        }
        else
        {
            /** Encrypt the password */ 
            if(loginTypeFlag.equalsIgnoreCase("1")){
            password=MD5Algorithm.MD5Encryption(password);	            
         
            if(!(password.equals(pwd))) 
            {
               
                resultObj.put("data","password is Invalid");
                resultObj.put("status", "failure");
            }else{
                resultFlag= dao.userLogin(userId);
            }
        }else{
            
            if(!(password.equals(pwd)||pwd.equalsIgnoreCase(null))) 
            {               
                resultObj.put("data","password is Invalid");
                resultObj.put("status", "failure");
            }else{
                resultFlag=true;
            }
        }
    }
    
    if(resultFlag) {
        resultObj.put("data", "Login successfully");
        resultObj.put("userloginId", userLoginId);
        resultObj.put("status", "success");
    }else {
        resultObj.put("data", "UserName and Password is Wrong");
        resultObj.put("status", "failure");
    }
}catch(Exception e) {
    resultObj.put("data", "Error occurred. Please contact admin exception"+userId+","+pwd);
    resultObj.put("status", "failure");
    e.printStackTrace();
}
return resultObj;
}    
@SuppressWarnings("unchecked")
public JSONObject userLogout(String userName){
    JSONObject resultObj = new JSONObject();
    try {

       
    Boolean resultFlag = dao.userLogout(userName);
    if(resultFlag) {
        resultObj.put("data", "Logoutsuccessfully");
        resultObj.put("status", "success");
    }else {
        resultObj.put("data", "Error occurred. Please contact admin ");
        resultObj.put("status", "failure");
    }
}catch(Exception e) {
    resultObj.put("data", "Error occurred. Please contact admin");
    resultObj.put("status", "failure");
    e.printStackTrace();
}
return resultObj;
} 
    
}
