package admin.login;


    import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import org.apache.log4j.Logger;

public class MD5Algorithm 
{
	static Logger log =  Logger.getLogger("Admin");
	/**
	 * Method		MD5Encryption
	 * Description	This method used to encrypt the password
	 * Date			05/10/2010
	 * @param		password
	 * @version		1.0
	 * @throws		NoSuchAlgorithmException
	 */
 
	public static String MD5Encryption(String password) throws NoSuchAlgorithmException
	
	{
		try
		{
			byte[] defaultBytes = password.getBytes();
			MessageDigest algorithm = MessageDigest.getInstance("MD5");
			algorithm.reset();
			algorithm.update(defaultBytes);
			byte messageDigest[] = algorithm.digest();
			StringBuffer hexString = new StringBuffer();
			for (int i=0;i<messageDigest.length;i++)
			{
				String hex = Integer.toHexString(0xFF & messageDigest[i]);
				if(hex.length()==1)
				hexString.append('0');
				hexString.append(hex);
			}
			password = hexString+"";
		}
		catch(Exception e)
		{
			
			log.error("Unable to convert the Given Text "+e.getMessage());
		}

		
		return password;

	}/** MD5Encryption(05/10/2010) */
	
	
}


