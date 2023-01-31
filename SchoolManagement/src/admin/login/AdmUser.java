package admin.login;

import java.sql.Timestamp;

/**
 * AdmUser entity. @author MyEclipse Persistence Tools
 */

public class AdmUser implements java.io.Serializable {
	
	private static final long serialVersionUID = 1L;
	private Integer userId;
	private String username;
	private String userLoginId;
	private String password;
	private Integer loginStatusFlag;
	private Integer loginTypeFlag;
	private String userDetails;
	private String nameSolutation;
	private String firstName;
	private String middleName;
	private String lastName;
	private String phoneNo;
	private String userDesignation;
	private String department;
	private Integer firstLoginFlag;
	private Timestamp pwdChangeDate;
	private Timestamp endDate;
	private Integer createdBy;
	private Timestamp createdDate;
	private Integer updatedBy;
	private Timestamp updatedDate;
	private Timestamp lastlogin;
	private Timestamp currentlogin;
	private String attribute1;
	private String attribute2;
	private String attribute3;

	// Constructors

	/** default constructor */
	public AdmUser() {
	}

	/** minimal constructor */
	public AdmUser(String username, String userLoginId, String password,
			String nameSolutation, String firstName) {
		this.username = username;
		this.userLoginId = userLoginId;
		this.password = password;
		this.nameSolutation = nameSolutation;
		this.firstName = firstName;
	}

	/** full constructor 
	 * @param lastlogin 
	 * @param currentlogin */
	public AdmUser(String username, String userLoginId, String password,
			Integer loginStatusFlag, Integer loginTypeFlag, String userDetails,
			String nameSolutation, String firstName, String middleName,
			String lastName, String phoneNo, String userDesignation,
			String department, Integer firstLoginFlag, Timestamp pwdChangeDate,
			Timestamp endDate, Integer createdBy, Timestamp createdDate,
			Integer updatedBy, Timestamp updatedDate, String attribute1,
			String attribute2, String attribute3, Timestamp lastlogin, Timestamp currentlogin) {
		this.username = username;
		this.userLoginId = userLoginId;
		this.password = password;
		this.loginStatusFlag = loginStatusFlag;
		this.loginTypeFlag = loginTypeFlag;
		this.userDetails = userDetails;
		this.nameSolutation = nameSolutation;
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.phoneNo = phoneNo;
		this.userDesignation = userDesignation;
		this.department = department;
		this.firstLoginFlag = firstLoginFlag;
		this.pwdChangeDate = pwdChangeDate;
		this.endDate = endDate;
		this.createdBy = createdBy;
		this.createdDate = createdDate;
		this.updatedBy = updatedBy;
		this.updatedDate = updatedDate;
		this.currentlogin=currentlogin;
		this.lastlogin=lastlogin;
		this.attribute1 = attribute1;
		this.attribute2 = attribute2;
		this.attribute3 = attribute3;
	}

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUsername() {
		return this.username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserLoginId() {
		return this.userLoginId;
	}

	public void setUserLoginId(String userLoginId) {
		this.userLoginId = userLoginId;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Integer getLoginStatusFlag() {
		return this.loginStatusFlag;
	}

	public void setLoginStatusFlag(Integer loginStatusFlag) {
		this.loginStatusFlag = loginStatusFlag;
	}

	public Integer getLoginTypeFlag() {
		return this.loginTypeFlag;
	}

	public void setLoginTypeFlag(Integer loginTypeFlag) {
		this.loginTypeFlag = loginTypeFlag;
	}

	public String getUserDetails() {
		return this.userDetails;
	}

	public void setUserDetails(String userDetails) {
		this.userDetails = userDetails;
	}

	public String getNameSolutation() {
		return this.nameSolutation;
	}

	public void setNameSolutation(String nameSolutation) {
		this.nameSolutation = nameSolutation;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getMiddleName() {
		return this.middleName;
	}

	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhoneNo() {
		return this.phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getUserDesignation() {
		return this.userDesignation;
	}

	public void setUserDesignation(String userDesignation) {
		this.userDesignation = userDesignation;
	}

	public String getDepartment() {
		return this.department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Integer getFirstLoginFlag() {
		return this.firstLoginFlag;
	}

	public void setFirstLoginFlag(Integer firstLoginFlag) {
		this.firstLoginFlag = firstLoginFlag;
	}

	public Timestamp getPwdChangeDate() {
		return this.pwdChangeDate;
	}

	public void setPwdChangeDate(Timestamp pwdChangeDate) {
		this.pwdChangeDate = pwdChangeDate;
	}

	public Timestamp getEndDate() {
		return this.endDate;
	}

	public void setEndDate(Timestamp endDate) {
		this.endDate = endDate;
	}

	public Integer getCreatedBy() {
		return this.createdBy;
	}

	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	public Timestamp getCreatedDate() {
		return this.createdDate;
	}

	public void setCreatedDate(Timestamp createdDate) {
		this.createdDate = createdDate;
	}

	public Integer getUpdatedBy() {
		return this.updatedBy;
	}

	public void setUpdatedBy(Integer updatedBy) {
		this.updatedBy = updatedBy;
	}

	public Timestamp getUpdatedDate() {
		return this.updatedDate;
	}

	public void setUpdatedDate(Timestamp updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getAttribute1() {
		return this.attribute1;
	}

	public void setAttribute1(String attribute1) {
		this.attribute1 = attribute1;
	}

	public String getAttribute2() {
		return this.attribute2;
	}

	public void setAttribute2(String attribute2) {
		this.attribute2 = attribute2;
	}

	public String getAttribute3() {
		return this.attribute3;
	}

	public void setAttribute3(String attribute3) {
		this.attribute3 = attribute3;
	}

	public Timestamp getLastlogin() {
		return lastlogin;
	}

	public void setLastlogin(Timestamp lastlogin) {
		this.lastlogin = lastlogin;
	}

	public Timestamp getCurrentlogin() {
		return currentlogin;
	}

	public void setCurrentlogin(Timestamp currentlogin) {
		this.currentlogin = currentlogin;
	}

}