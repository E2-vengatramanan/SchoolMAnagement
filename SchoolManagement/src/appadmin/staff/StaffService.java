package appadmin.staff;

import java.sql.Timestamp;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StaffService {
	
	@Autowired
	StaffDAO dao;
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
	public JSONObject deleteStaff(StaffModel modelData) {
		JSONObject resultObj = new JSONObject();
		try {
			Boolean updateDeleteFlag = dao.updateDeleteFlag(modelData);
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

}
