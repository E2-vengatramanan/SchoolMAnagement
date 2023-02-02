package appadmin.student;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class StudentController {
    @Autowired
	StudentService service;

	@GetMapping("/student.do")
	public JSONObject getAllStaff() {
		JSONObject obj = service.getAllStudent();
		return obj;
	}
	
	@PostMapping("/student.do")
	public JSONObject saveStaff(@RequestBody StudentModel model) {
	
		JSONObject obj = service.saveStudent(model);
		return obj;
	}
	
	@PutMapping("/student.do")
	public JSONObject updateStaff(@RequestBody StudentModel model) {
		
		JSONObject obj = service.updateStudent(model);
		return obj;
	}
	@DeleteMapping("/student.do")
	public JSONObject deleteStudent(@RequestParam Integer studentId) {
		JSONObject obj = service.deleteStudent(studentId);
		return obj;
	}
}
