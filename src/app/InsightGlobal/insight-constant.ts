export class InsightConstant {
  public static InsightServerURL = 'http://localhost:8080';

  public static InsightBaseURL = InsightConstant.InsightServerURL + '/';

  public static LOGIN = InsightConstant.InsightBaseURL + 'login';

  public static FETCH_STUDENT = InsightConstant.InsightBaseURL + 'fetchstudent';
  public static GROUP_ALLOTMENT = InsightConstant.InsightBaseURL + 'group_allotment';
  public static ALLOTED_GROUP = InsightConstant.InsightBaseURL + 'project_allotment/alloted_groups';
  public static PROJECT_ALLOTMENT = InsightConstant.InsightBaseURL + 'project_allotment/project_allotment';
  public static STUDENT_REGISTRATION = InsightConstant.InsightBaseURL + 'registration';
  public static ALLOTED_PROJECT_LIST = InsightConstant.InsightBaseURL + 'guide/alloted_project_list';
  public static GUIDE_LIST = InsightConstant.InsightBaseURL + 'guide/guide_list';
  public static GUIDE_LOAD = InsightConstant.InsightBaseURL + 'guide/load_guide';
  public static DASHBOARD_STUDENT_COUNT = InsightConstant.InsightBaseURL + 'dashboard/student_count';
}
