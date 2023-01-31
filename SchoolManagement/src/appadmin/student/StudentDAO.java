package appadmin.student;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.stereotype.Service;
import global.persistantDB.config.HibernateSessionFactory;

@Service
public class StudentDAO {
    public Boolean savestudent(StudentModel model) {
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


	protected Boolean updateStudent(StudentModel model) {
		Boolean resultFlag = false;
		Session session = HibernateSessionFactory.getSession();
			Transaction trans = session.beginTransaction();
		try {			
			StudentModel existingModel = (StudentModel) session.load(StudentModel.class, model.getStudentId());
			if(existingModel !=null){
				existingModel=(StudentModel) model;			
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
	public List<StudentModel> getstudentList() {
		List<StudentModel> studentList = new ArrayList<>();
		try {
			Session session = HibernateSessionFactory.getSession();
			studentList = session.createCriteria(StudentModel.class).add(Restrictions.eq("deleteFlag", 0)).list();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return studentList;
	}
	

	public Boolean updateDeleteFlag(StudentModel modelData) {
		Boolean resultFlag = false;
		try {
			Session session = HibernateSessionFactory.getSession();
			Transaction transaction = session.beginTransaction();
			String sql = "Update StudentModel set  deleteFlag = 1 where staffId=:ID";
			Query query = session.createQuery(sql);
			query.setParameter("ID", modelData.getStudentId());
			Integer executeId = query.executeUpdate();
			String hql = "Update StudentStaffMapping set  staffDeleteFlag = 1 where studentId=:ID";
			Query query1 = session.createQuery(hql);
			query1.setParameter("ID", modelData.getStudentId());
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
