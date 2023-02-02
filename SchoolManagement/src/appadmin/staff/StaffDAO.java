package appadmin.staff;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
import global.persistantDB.config.HibernateSessionFactory;

@Service
public class StaffDAO {
	public Boolean savestaff(StaffModel model) {
		Boolean resultFlag = false;
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction trans = session.beginTransaction();
			session.save(model);
			trans.commit();
			session.close();
			resultFlag = true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resultFlag;
	}


	protected Boolean updateStaff(StaffModel model) {
		Boolean resultFlag = false;
		Session session = HibernateSessionFactory.getSession();
			Transaction trans = session.beginTransaction();
		try {			
			StaffModel existingModel = (StaffModel) session.load(StaffModel.class, model.getStaffId());
			if(existingModel !=null){
				existingModel=(StaffModel) model;			
				session.update(existingModel);
				resultFlag = true;
			}
		
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			trans.commit();
			session.close();
		}
		return resultFlag;
	}
	
	@SuppressWarnings("unchecked")
	public List<StaffModel> getstaffList() {
		List<StaffModel> staffList = new ArrayList<>();
		try {
			Session session = HibernateSessionFactory.getSession();
			staffList = session.createCriteria(StaffModel.class).add(Restrictions.eq("deleteFlag", 0)).list();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return staffList;
	}
	@SuppressWarnings("unchecked")
	public List<StudentStaffMapping> getstudentStaffMappingList(Integer staffId) {
		List<StudentStaffMapping> studentStaffMappingList = new ArrayList<>();
		try {
			studentStaffMappingList = HibernateSessionFactory.getSession().createCriteria(StudentStaffMapping.class)
					.add(Restrictions.eq("staffModel.staffId", staffId))
					.add(Restrictions.eq("activeFlag",1))
					.add(Restrictions.eq("staffDeleteFlag",0))
					.add(Restrictions.eq("studentDeleteFlag",0))
					.list();
			return studentStaffMappingList;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return studentStaffMappingList;
	}
	@SuppressWarnings("unchecked")
	public List<Integer> getStudentIds() {
		List<Integer> staffAssignedList = new ArrayList<>();
		try {
			staffAssignedList = HibernateSessionFactory.getSession().createCriteria(StudentStaffMapping.class)
					.setProjection(Projections.property("studModel.studentId"))
					.list();
			return staffAssignedList;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}


	public Boolean updateDeleteFlag(Integer staffId) {
		Boolean resultFlag = false;
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction transaction = session.beginTransaction();
			String sql = "Update StaffModel set  deleteFlag = 1 where staffId=:ID";
			Query query = session.createQuery(sql);
			query.setParameter("ID",staffId);
			Integer executeId = query.executeUpdate();			
			String sql1 = "Update StudentStaffMapping set  staffDeleteFlag =1 where staffModel.staffId=:ID";
			Query query1 = session.createQuery(sql1);
			query1.setParameter("ID",staffId);
		    query1.executeUpdate();			
			transaction.commit();
			session.close();
			if (executeId != null && executeId != 0) {
				resultFlag = true;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resultFlag;
	}


	public void removeExistingMappedStudent(Integer staffId,Integer modifiedBy) {
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction transaction = session.beginTransaction();
			String sql = "Update from  StudentStaffMapping set activeFlag=0,modifiedBy=:MODIFIEDBY where staffModel.staffId=:STAFFID";
			Query query = session.createQuery(sql);
			query.setParameter("STAFFID", staffId);
			query.setParameter("MODIFIEDBY",modifiedBy);
			query.executeUpdate();
			transaction.commit();
			session.close();
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public Integer assignStaff(StudentStaffMapping studentStaffMapping) {
		Integer savedId = 0;
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction trans = session.beginTransaction();
			savedId = (Integer) session.save(studentStaffMapping);
			trans.commit();
			session.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return savedId;
	}

}
