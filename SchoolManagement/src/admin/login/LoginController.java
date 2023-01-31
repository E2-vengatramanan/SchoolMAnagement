package admin.login;

import org.json.simple.JSONObject;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin
public class LoginController {
  
	LoginService service=new LoginService();

    @PostMapping("login.do")
    public JSONObject userLogin(@RequestParam String userName,@RequestParam String passWord) {
		JSONObject obj = service.userLogin(userName,passWord);
		return obj;
	}
    @PostMapping("logout.do")
    public JSONObject userLogout(String userName) {
		JSONObject obj = service.userLogout(userName);
		
		return obj;
	}
	@GetMapping("log.do")
    public String get() {
		String value="welcome";
		return value;
	}
}
