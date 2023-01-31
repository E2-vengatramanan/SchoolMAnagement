package global.persistantDB.config;

import admin.login.*;

public class DAOFactory 
{
	
	
	
	public static DAOClass<AdmUser> AdmUserDao=getAdUserInstance();
     
	private static DAOClass<AdmUser> getAdUserInstance() {
	 
		if(AdmUserDao==null)
			return new  DAOClass<AdmUser>(new AdmUser());
			else return AdmUserDao;
	} 	
		
	}
