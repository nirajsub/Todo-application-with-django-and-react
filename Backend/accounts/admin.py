from django.contrib import admin
from .models import *

class AddressAdmin(admin.ModelAdmin):
    list_display = ('street_address', 'city', 'state', 'zip_code',)
class AccountAdmin(admin.ModelAdmin):
    list_display = ('user', 'full_name', 'date_of_birth', 'total_working_hour', 'dietary_preference', 'drink_preference',)
class OccupationAdmin(admin.ModelAdmin):
    list_display=('user', 'name', 'working_hour',)
class GoalAdmin(admin.ModelAdmin):
    list_display=('user', 'title', 'due_date',)
class TaskAdmin(admin.ModelAdmin):
    list_display=('user', 'title', 'completed', 'time_required', 'goal',)
class DrinkAdmin(admin.ModelAdmin):
    list_display=('name',)
class FoodAdmin(admin.ModelAdmin):
    list_display=('name',)
class WorkoutAdmin(admin.ModelAdmin):
    list_display=('name',)
class ActivityAdmin(admin.ModelAdmin):
    list_display=('user', 'wake_up_time', 'sleep_time', 'workout_time',)
admin.site.register(Address, AddressAdmin)
admin.site.register(Account, AccountAdmin)
admin.site.register(Occupation, OccupationAdmin)
admin.site.register(Goal, GoalAdmin)
admin.site.register(Task, TaskAdmin)
admin.site.register(Drink, DrinkAdmin)
admin.site.register(Food, FoodAdmin)
admin.site.register(Workout, WorkoutAdmin)
admin.site.register(Activity, ActivityAdmin)
