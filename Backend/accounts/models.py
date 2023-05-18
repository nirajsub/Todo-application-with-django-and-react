from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import RegexValidator
from pytz import all_timezones
from django.contrib.auth.models import User

class Address(models.Model):
    street_address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=10, validators=[RegexValidator(r'^\d{5}$', 'Zip code must be 5 digits.')])

    def clean(self):
        if not self.street_address:
            raise ValidationError('Street address is required.')
        if not self.city:
            raise ValidationError('City is required.')
        if not self.state:
            raise ValidationError('State is required.')
        if not self.zip_code:
            raise ValidationError('Zip code is required.')
    
    def __str__(self):
        return self.street_address

def validate_timezone(value):
    if value not in all_timezones:
        raise ValidationError('Invalid timezone')

GENDER = (
    ("Male", "Male"),
    ("Female", "Female"),
    ("Other", "Other"),
)
DIET = (
    ("vegetarian", "vegetarian"),
    ("non-vegetarian", "non-vegetarian"),
    ("vegan", "vegan"),
)
DRINK = (
    ("Hard Drink", "Hard Drink"),
    ("Soft Drink", "Soft Drink"),
    ("non-alcoholic", "non-alcoholic"),
)
class Account(models.Model):
    user = models.OneToOneField(User, blank=True, null=True, on_delete=models.CASCADE)
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    full_name = models.CharField(max_length=50)
    phone_number = models.IntegerField()
    address = models.ForeignKey(Address, on_delete=models.CASCADE, blank=True, null=True)
    gender = models.CharField(
        max_length=20, choices=GENDER, default=".")
    date_of_birth = models.DateField(auto_now=False, auto_now_add=False, blank=True, null=True)
    avatar = models.ImageField(upload_to='media/avatar', blank=True, null=True)
    height = models.IntegerField(blank=True, null=True)
    weight = models.IntegerField(blank=True, null=True)
    timezone = models.CharField(max_length=50, validators=[validate_timezone], blank=True, null=True)

    total_working_hour = models.CharField(max_length=50, blank=True, null=True)

    dietary_preference = models.CharField(
        max_length=20, choices=DIET, default="vegetarian")
    drink_preference = models.CharField(
        max_length=20, choices=DRINK, default="non-alcoholic")

    # def save(self, *args, **kwargs):
    #     occupation = Occupation.objects.filter(user=self.user)
    #     self.total_working_hour = sum([item.working_hours for item in occupation])
    #     super(Account, self).save(*args, **kwargs)

    def __str__(self):
        return self.full_name

HOURS = (
    ("1", "1"),
    ("2", "2"),
    ("3", "3"),
    ("4", "4"),
    ("5", "5"),
    ("6", "6"),
    ("7", "7"),
    ("8", "8"),
    ("9", "9"),
    ("10", "10"),
    ("11", "11"),
    ("12", "12"),
)
class Occupation(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    working_hour = models.CharField(
        max_length=20, choices=HOURS, default="0")
    
    def __str__(self):
        return self.name

class Goal(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    due_date = models.DateField(auto_now=False, auto_now_add=False)

    task_per_day = models.PositiveIntegerField(default=1)

    # def tasks_completed_today(self, user):
    #     today = timezone.now().date()
    #     user_tasks = Task.objects.filter(user=user, goal=self, created_at__date=today)
    #     return user_tasks.count() >= self.task_per_day

    def __str__(self):
        return self.title

class Task(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_on = models.DateField(auto_now_add=True)
    time_required = models.IntegerField()
    goal = models.ForeignKey("Goal", on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.title

class Drink(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Food(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Workout(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Activity(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    wake_up_time = models.DateTimeField(auto_now=False, auto_now_add=False)
    sleep_time = models.DateTimeField(auto_now=False, auto_now_add=False)
    drinks = models.ForeignKey("Drink", on_delete=models.SET_NULL, null=True)
    food_ate = models.ForeignKey("Food", on_delete=models.SET_NULL, null=True)
    workout = models.ForeignKey("Workout", on_delete=models.SET_NULL, null=True)
    workout_time = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return self.user.username










