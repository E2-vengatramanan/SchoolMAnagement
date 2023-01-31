package admin.login;

import java.sql.Date;
import java.sql.Timestamp;


public class AdmSession {

	private Integer admSessionId;
	private Integer admUserId;
	private String sessionId;
	private String uniqueKey;
	private Integer createdBy;
	private Date createdDate;
	private Integer modifiedBy;
	private Date modifiedDate;
	private Timestamp endDate;

	public Integer getAdmSessionId() {
		return admSessionId;
	}

	public void setAdmSessionId(Integer admSessionId) {
		this.admSessionId = admSessionId;
	}

	public Integer getAdmUserId() {
		return admUserId;
	}

	public void setAdmUserId(Integer admUserId) {
		this.admUserId = admUserId;
	}

	public String getSessionId() {
		return sessionId;
	}

	public void setSessionId(String sessionId) {
		this.sessionId = sessionId;
	}

	public Integer getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(Integer createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Integer getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(Integer modifiedBy) {
		this.modifiedBy = modifiedBy;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public Timestamp getEndDate() {
		return endDate;
	}

	public void setEndDate(Timestamp timestamp) {
		this.endDate = timestamp;
	}

	public String getUniqueKey() {
		return uniqueKey;
	}

	public void setUniqueKey(String uniqueKey) {
		this.uniqueKey = uniqueKey;
	}
}
