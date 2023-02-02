package appadmin.staff;
import java.sql.Timestamp;

import appadmin.student.StudentModel;

public class StudentStaffMapping {
    private Integer id;
	private StudentModel studModel;
	private StaffModel staffModel;
	private Integer activeFlag;
	private Integer staffDeleteFlag;
	private Integer studentDeleteFlag;
	private Integer createdBy;
	private Timestamp createdDate;
	private Integer modifiedBy;
	private Timestamp modifiedDate;
	private Timestamp endDate;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public StudentModel getStudModel() {
        return studModel;
    }
    public void setStudModel(StudentModel studModel) {
        this.studModel = studModel;
    }
    public StaffModel getStaffModel() {
        return staffModel;
    }
    public void setStaffModel(StaffModel staffModel) {
        this.staffModel = staffModel;
    }
    public Integer getActiveFlag() {
        return activeFlag;
    }
    public void setActiveFlag(Integer activeFlag) {
        this.activeFlag = activeFlag;
    }
    public Integer getStaffDeleteFlag() {
        return staffDeleteFlag;
    }
    public void setStaffDeleteFlag(Integer staffDeleteFlag) {
        this.staffDeleteFlag = staffDeleteFlag;
    }

    public Integer getStudentDeleteFlag() {
        return studentDeleteFlag;
    }
    public void setStudentDeleteFlag(Integer studentDeleteFlag) {
        this.studentDeleteFlag = studentDeleteFlag;
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
    public Timestamp getEndDate() {
        return endDate;
    }
    public void setEndDate(Timestamp endDate) {
        this.endDate = endDate;
    }




}
