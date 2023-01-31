package global.persistantDB.config;




import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.criterion.Example;

@SuppressWarnings("unchecked")
public class DAOClass<T> {
	
	private  Session getSession() {
		return HibernateSessionFactory.getSession();
	}

	private T t;
	public DAOClass(T t){
		this.t = t;
	}
	public void save(T t) {
		
		try {
			getSession().beginTransaction().begin();
			getSession().save(t);
			getSession().flush();
			getSession().beginTransaction().commit();			
			getSession().clear();
		}
		 catch (HibernateException e) {
				getSession().beginTransaction().rollback();		
				
				throw e;		
		  	}
		 catch (RuntimeException e) {
			getSession().beginTransaction().rollback();		
			
			
			throw e;		
	  	}
		 catch(Exception e)
		{
			getSession().beginTransaction().rollback();		
			
		}
	}
	
	
	
	public void delete(T t) {
		
		try {
			getSession().beginTransaction().begin();
			getSession().delete(t);
			
			getSession().beginTransaction().commit();
			getSession().flush();
			getSession().clear();

			
		}
		catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
	
		
		throw e;		
  	}
	 catch(Exception e)
	{
		getSession().beginTransaction().rollback();		
		
	
	}
	}

	
	
	public T findById(java.lang.Integer id) {
		
		try {
			T instance = (T) getSession().get(t.getClass().getName(), id);
			getSession().clear();
			return instance;
		}catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
		
		
		throw e;		
  	}
	
	}

	public List<T> findByExample(T t)  {
		
		try {
			List<T> results = getSession().createCriteria(t.getClass().getName()).add(Example.create(t)).list();
			getSession().clear();
			return results;
		} catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
		
		
		throw e;		
  	}
		}
	
	public List<T> findByProperty(String propertyName, Object value) {
		
		try {
			String queryString = "from "+t.getClass().getName()+" as model where model."
					+ propertyName + "= ?";
			Query queryObject = getSession().createQuery(queryString);
			queryObject.setParameter(0, value);
			
			getSession().clear();
		

			return queryObject.list();
		} catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
	
		
		throw e;		
  	}
	
	}
	
	public void update(T t)  {
		try {
			getSession().beginTransaction().begin();
			getSession().update(t);
			getSession().beginTransaction().commit();
			getSession().clear();		
			
		} catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
		
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
		
		
		throw e;		
  	}
	 catch(Exception e)
	{
		getSession().beginTransaction().rollback();		
		

	}
	}
	
	public List<T> findAll()  {
		
		try {
			String queryString = "from "+t.getClass().getName();
			Query queryObject = getSession().createQuery(queryString);
			getSession().clear();
			return queryObject.list();
			
		}  catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
	
		
		throw e;		
  	}
	
	}
	

	public Criteria findByCriteria()
	{
	
	try {
	 Criteria creCriteria=getSession().createCriteria(t.getClass().getName());
	 getSession().clear();
	return creCriteria;
	 
		}  catch (HibernateException e) {
			getSession().beginTransaction().rollback();		
			
			throw e;		
	  	}
		 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
		
		throw e;		
		}
	
	} 
	
	
	
	public T merge(T t) 
	{
	try {	 
	  return (T) getSession().merge(t);
		 
	} catch (HibernateException e) {
		getSession().beginTransaction().rollback();		
		
			throw e;		
	  	}
	 catch (RuntimeException e) {
		getSession().beginTransaction().rollback();		
		
		
		throw e;		
		}
	
	}
}
