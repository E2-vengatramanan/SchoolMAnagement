package appadmin.student;

import java.sql.Timestamp;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class StudentService {
	
	@Autowired
	StudentDAO dao;
	@SuppressWarnings("unchecked")
	public JSONObject getAllStudent() {
		JSONObject resultObj = new JSONObject();
		try {
			List<StudentModel> modelData = dao.getstudentList();
			if(modelData!=null && modelData.size()>0) {
				JSONArray arr = new JSONArray();
				resultObj.put("status", "success");
				for(StudentModel staffDetails : modelData) {
					JSONObject obj = new JSONObject();
					obj.put("studentId", staffDetails.getStudentId()!=null?staffDetails.getStudentId():0);
					obj.put("className",staffDetails.getClassName());
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
	public JSONObject saveStudent(StudentModel modelData) {
		JSONObject resultObj = new JSONObject();
	
		try {

				modelData.setCreatedDate(new Timestamp(System.currentTimeMillis()));
			Boolean resultFlag = dao.savestudent(modelData);
		
			if(resultFlag) {
				resultObj.put("data", "Student Added Successfully");
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
	public JSONObject updateStudent(StudentModel modelData) {
		JSONObject resultObj = new JSONObject();
		try {
		
			modelData.setModifiedDate(new Timestamp(System.currentTimeMillis()));
				Boolean resultFlag=dao.updateStudent(modelData);
				if(resultFlag) {
				resultObj.put("data", "Student Updated Successfully");
				resultObj.put("status", "success");
			}else {
				resultObj.put("data", "Error occurred. Please contact adminresult");
				resultObj.put("status", "failure");
			}
		}catch(Exception e) {
			resultObj.put("data", "Error occurred. Please contact adminexcept");
			resultObj.put("status", "failure");
			e.printStackTrace();
		}
		return resultObj;
	}

	@SuppressWarnings("unchecked")
	public JSONObject deleteStudent(StudentModel modelData) {
		JSONObject resultObj = new JSONObject();
		try {
			Boolean updateDeleteFlag = dao.updateDeleteFlag(modelData);
			if(updateDeleteFlag) {
				resultObj.put("data", "Student Deleted Successfully");
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

}
