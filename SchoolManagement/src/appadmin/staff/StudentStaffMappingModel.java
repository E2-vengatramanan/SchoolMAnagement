package appadmin.staff;
import java.sql.Timestamp;
import java.util.List;

public class StudentStaffMappingModel {
	private Integer staffId;
	private Integer createdBy;
	private Timestamp createdDate;
	private Integer modifiedBy;
	private Timestamp modifiedDate;
	private List<Integer> studentId;
	public Integer getStaffId() {
		return staffId;
	}
	public void setStaffId(Integer staffId) {
		this.staffId = staffId;
	}
	public Integer getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}
	public Timestamp getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}
	public Integer getModifiedBy() {
		return modifiedBy;
	}
	public void setModifiedBy(Integer modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	public Timestamp getModifiedDate() {
		return modifiedDate;
	}
	public void setModifiedDate(Timestamp modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	public List<Integer> getStudentId() {
		return studentId;
	}
	public void setStudentId(List<Integer> studentId) {
		this.studentId = studentId;
	}
	

	
	
}
