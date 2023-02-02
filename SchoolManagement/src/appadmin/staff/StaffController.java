package appadmin.staff;

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
public class StaffController {
	@Autowired
	StaffService service;

	@GetMapping("/staff.do")
	public JSONObject getAllStaff() {
		JSONObject obj = service.getAllStaff();
		return obj;
	}
	@GetMapping("/getassignedStudentsByStaffId.do")
	public JSONObject getassignedStudentsByStaffId(@RequestParam Integer staffId) {
		JSONObject obj = service.getassignedStudentsByStaffId(staffId);
		return obj;
	}
	
	@PostMapping("/staff.do")
	public JSONObject saveStaff(@RequestBody StaffModel model) {
	
		JSONObject obj = service.saveStaff(model);
		return obj;
	}
	
	@PutMapping("/staff.do")
	public JSONObject updateStaff(@RequestBody StaffModel model) {
		
		JSONObject obj = service.updateStaff(model);
		return obj;
	}
	@DeleteMapping("/staff.do")
	public JSONObject deleteStaff(@RequestParam Integer staffId) {
		JSONObject obj = service.deleteStaff(staffId);
		return obj;
	}
	 @PostMapping("/assignStaff.do")
	public JSONObject assignproject(@RequestBody StudentStaffMappingModel studenttAssignModel) {
		JSONObject obj = service.assignStaff(studenttAssignModel);
		return obj;
	} 
}
