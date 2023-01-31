package appadmin.staff;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
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
	

	public Boolean updateDeleteFlag(StaffModel modelData) {
		Boolean resultFlag = false;
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction transaction = session.beginTransaction();
			String sql = "Update StaffModel set  deleteFlag = 1 where staffId=:ID";
			Query query = session.createQuery(sql);
			query.setParameter("ID", modelData.getStaffId());
			Integer executeId = query.executeUpdate();
			String hql = "Update StudentStaffMapping set  staffDeleteFlag = 1 where staffId=:ID";
			Query query1 = session.createQuery(hql);
			query1.setParameter("ID", modelData.getStaffId());
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
}
