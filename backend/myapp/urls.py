from django.urls import path
from myapp import views
from .views import signupview,custom_login,Next


urlpatterns = [
    # path('student/',views.StudentList.as_view()),
    path('signup/',views.signupview,name='signup'),
    path('login/',views. custom_login,name='login'),
    path('next/',views.Next,name='next')

]