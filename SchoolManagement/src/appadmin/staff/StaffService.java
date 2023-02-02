package appadmin.staff;

import java.sql.Timestamp;
import java.util.List;
import java.util.Collections;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appadmin.student.StudentDAO;
import appadmin.student.StudentModel;

@Service
public class StaffService {
	
	@Autowired
	StaffDAO dao;

	@Autowired
	StudentDAO studentdao;
	@SuppressWarnings("unchecked")
	public JSONObject getAllStaff() {
		JSONObject resultObj = new JSONObject();
		try {
			List<StaffModel> modelData = dao.getstaffList();
			if(modelData!=null && modelData.size()>0) {
				JSONArray arr = new JSONArray();
				resultObj.put("status", "success");
				for(StaffModel staffDetails : modelData) {
					JSONObject obj = new JSONObject();
					obj.put("staffId", staffDetails.getStaffId()!=null?staffDetails.getStaffId():0);
					obj.put("subject",staffDetails.getSubject());
					obj.put("firstName", staffDetails.getFirstName());
					obj.put("lastName",staffDetails.getLastName());
					obj.put("address", staffDetails.getAddress());
					obj.put("phone", staffDetails.getPhone());
					obj.put("emailId", staffDetails.getEmailId());
					obj.put("createdBy",staffDetails.getCreatedBy());
					obj.put("createdDate",staffDetails.getCreatedDate());				
					arr.add(obj);
				}
				resultObj.put("status", "success");
				resultObj.put("data", arr);
			}else {
				resultObj.put("status", "success");
				resultObj.put("data", new JSONArray());
			}
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resultObj;
	}
	@SuppressWarnings("unchecked")
	public JSONObject getassignedStudentsByStaffId(Integer staffId) {
		JSONObject resultObj = new JSONObject();
		try {
			List<StudentStaffMapping> StudentStaffMappingList = dao.getstudentStaffMappingList(staffId);
			JSONArray assignArray = new JSONArray();
			List<Integer> studentIds = dao.getStudentIds();
					if(StudentStaffMappingList!=null && StudentStaffMappingList.size()>0) {
				for(StudentStaffMapping staffAssignee : StudentStaffMappingList) {
					JSONObject assignObj = new JSONObject();
					assignObj.put("firstName", staffAssignee.getStudModel().getFirstName());
					assignObj.put("lastName", staffAssignee.getStudModel().getLastName());
					assignObj.put("studentId", staffAssignee.getStudModel().getStudentId());
                    studentIds.removeAll(Collections.singleton(Integer.valueOf( staffAssignee.getStaffModel().getStaffId())));
					assignArray.add(assignObj);
				}
			}		
			List<StudentModel> modelData = studentdao.getstudentList();
			JSONArray arr = new JSONArray();
			if(modelData!=null && modelData.size()>0) {
				resultObj.put("status", "success");
				for(StudentModel studentDetails : modelData) {
								
						JSONObject obj = new JSONObject();
						obj.put("studentId", studentDetails.getStudentId()!=null?studentDetails.getStudentId():0);
						obj.put("className", studentDetails.getClassName());
						obj.put("firstName", studentDetails.getFirstName());
						obj.put("lastName",studentDetails.getLastName());
						obj.put("address", studentDetails.getAddress());
						obj.put("phone", studentDetails.getPhone());
						obj.put("emailId", studentDetails.getEmailId());
						arr.add(obj);
				}
			}
			resultObj.put("assignedStudentArray", assignArray);
			resultObj.put("allStudentArray", arr);
			resultObj.put("status", "success");
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact admin");
			resultObj.put("status", "failure");
			e.printStackTrace();
		}
		return resultObj;
	}
	@SuppressWarnings("unchecked")
	public JSONObject saveStaff(StaffModel modelData) {
		JSONObject resultObj = new JSONObject();
	
		try {
			modelData.setCreatedDate(new Timestamp(System.currentTimeMillis()));
			Boolean resultFlag = dao.savestaff(modelData);		
			if(resultFlag) {
				resultObj.put("data", "Staff Added Successfully");
				resultObj.put("status", "success");
			}else {
				resultObj.put("data", "Error occurred. Please contact admin resultflag");
				resultObj.put("status", "failure");
			}
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact admin catch");
			resultObj.put("status", "failure");
			e.printStackTrace();
		}
		return resultObj;
	}

	@SuppressWarnings("unchecked")
	public JSONObject updateStaff(StaffModel modelData) {
		JSONObject resultObj = new JSONObject();
		try {
		
			modelData.setModifiedDate(new Timestamp(System.currentTimeMillis()));
				Boolean resultFlag=dao.updateStaff(modelData);
				if(resultFlag) {
				resultObj.put("data", "Staff Updated Successfully");
				resultObj.put("status", "success");
			}else {
				resultObj.put("data", "Error occurred. Please contact admin");
				resultObj.put("status", "failure");
			}
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact admin");
			resultObj.put("status", "failure");
			e.printStackTrace();
		}
		return resultObj;
	}

	@SuppressWarnings("unchecked")
	public JSONObject deleteStaff(Integer staffId) {
		JSONObject resultObj = new JSONObject();
		try {
			Boolean updateDeleteFlag = dao.updateDeleteFlag(staffId);
			if(updateDeleteFlag) {
				resultObj.put("data", "Staff Deleted Successfully");
				resultObj.put("status", "success");
			}else {
				resultObj.put("data", "Error occurred. Please contact admin");
				resultObj.put("status", "failure");
			}
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact admin");
			resultObj.put("status", "failure");
			e.printStackTrace();
		}
		return resultObj;
	}

	@SuppressWarnings("unchecked")
	public JSONObject assignStaff(StudentStaffMappingModel studentAssignmodel) {
		JSONObject resultObj = new JSONObject();
		try {
			Boolean saveFlag = true;
			dao.removeExistingMappedStudent(studentAssignmodel.getStaffId(),studentAssignmodel.getModifiedBy());
			StaffModel model = new StaffModel(studentAssignmodel.getStaffId());
			for(Integer studentId : studentAssignmodel.getStudentId()) {
				StudentModel studentModel = new StudentModel(studentId);
				StudentStaffMapping assignStaff = new StudentStaffMapping();
				assignStaff.setStaffModel(model);
				assignStaff.setStudModel(studentModel);
				assignStaff.setCreatedBy(studentAssignmodel.getCreatedBy());
				assignStaff.setCreatedDate(new Timestamp(System.currentTimeMillis()));
				assignStaff.setActiveFlag(1);
				assignStaff.setStaffDeleteFlag(0);
				assignStaff.setStudentDeleteFlag(0);
				Integer savedId = dao.assignStaff(assignStaff);
				if(savedId!=null && savedId!=0)
					saveFlag = true;
				else
					saveFlag = false;
			}
			if(saveFlag) {
				resultObj.put("data", "Staff assigned to Student Successfully");
				resultObj.put("status", "success");
			}else {
				resultObj.put("data", "Error occurred. Please contact adminsave");
				resultObj.put("status", "failure");
			}
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact admincatch");
			resultObj.put("status", "failure");
		}
		return resultObj;
	}

	

}
