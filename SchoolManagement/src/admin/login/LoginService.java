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

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class LoginService {
    LoginDAO dao=new LoginDAO();
    @SuppressWarnings("unchecked")
public JSONObject userLogin(String userName,String password){
    JSONObject resultObj = new JSONObject();
    String pwd=null;
    String userId=null;
    String userLoginId=null;
    Boolean resultFlag=false;
    try {
        Session session=HibernateSessionFactory.getSession();	
        Transaction trans = session.beginTransaction();

        String SQL_QUERY ="from AdmUser as user where user.userLoginId='"+userName+"' and user.loginStatusFlag=0 ";
        Query query = session.createQuery(SQL_QUERY);		
      
        for(Iterator<?> i=query.iterate();i.hasNext();)
        {
            AdmUser adminUser=(AdmUser)i.next();
            pwd=adminUser.getPassword();	
            userId=adminUser.getUserId().toString();
            userLoginId=adminUser.getUserLoginId();           
        }	
     if(userId==null || userId.equals(null) || userId.equals(""))
        {
          resultObj.put("data","userName is Invalid");
          resultObj.put("status", "failure");
        }
        else
        {
            /** Encrypt the password */ 
            password=MD5Algorithm.MD5Encryption(password);	
         
            if(!(password.equals(pwd))) /** Password validation */
            {
               
                resultObj.put("data","password is Invalid");
                resultObj.put("status", "failure");
            }else{
                resultFlag= dao.userLogin(userId);
            }
        }
    
    if(resultFlag) {
        resultObj.put("data", "Login successfully"+userId+","+pwd);
        resultObj.put("status", "success");
    }else {
        resultObj.put("data", "Error occurred. Please contact admin resultflag"+userId+","+pwd);
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
