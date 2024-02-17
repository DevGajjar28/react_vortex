from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

# Define a custom admin class inheriting from UserAdmin
class CustomUserAdmin(UserAdmin):
    # Add additional fields to display in the admin panel
    list_display = ('username', 'email', 'first_name', 'last_name', 'is_staff', 'date_joined')

# Unregister the default UserAdmin class
admin.site.unregister(User)

# Register the User model with your custom UserAdmin class
admin.site.register(User, CustomUserAdmin)
