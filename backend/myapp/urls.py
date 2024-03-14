from django.urls import path
from myapp import views
# from .views import register_user,login_user
# from .views import register_user,login_user

urlpatterns = [
    # path('student/',views.StudentList.as_view()),
      path('/api/register/',views.register, name='register'),
    path('api/login/',views.login_user, name='login'),
    # path('next/',views.Next,name='next')

]
