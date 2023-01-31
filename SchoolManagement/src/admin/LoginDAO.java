package admin;
import global.persistantDB.config.HibernateSessionFactory;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
public class LoginDAO {
    public Boolean userLogin(String userId) {
        Boolean result=false;
        {      
            if(userId!=null){			
                try{
                    Session session=HibernateSessionFactory.getSession();
                    Transaction trans=session.beginTransaction();              
                    
                    String hql = "Update AdmUser set  loginStatusFlag =1 where userLoginId='"+userId+"'";
                Query query = session.createQuery(hql);
                query.executeUpdate();
                result=true;
                }catch(Exception e){
                    e.printStackTrace();
                }
            }
        }
        return result;
    }

    public Boolean userLogout(String userId) {
    Boolean result=false;
	{      
		if(userId!=null){			
			try{
				Session session=HibernateSessionFactory.getSession();
				Transaction trans=session.beginTransaction();              
				
				String hql = "Update AdmUser set  loginStatusFlag =0 where userLoginId='"+userId+"'";
			Query query = session.createQuery(hql);
            query.executeUpdate();
            result=true;
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}
    return result;
}
}
