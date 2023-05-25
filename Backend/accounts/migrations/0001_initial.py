# Generated by Django 4.2 on 2023-05-16 06:19

import accounts.models
from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('full_name', models.CharField(max_length=50)),
                ('phone_number', models.IntegerField()),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], default='.', max_length=20)),
                ('date_of_birth', models.DateField(blank=True)),
                ('avatar', models.ImageField(blank=True, upload_to='media/avatar')),
                ('height', models.IntegerField(blank=True)),
                ('weight', models.IntegerField(blank=True)),
                ('timezone', models.CharField(blank=True, max_length=50, validators=[accounts.models.validate_timezone])),
                ('total_working_hour', models.CharField(blank=True, max_length=50)),
                ('dietary_preference', models.CharField(choices=[('vegetarian', 'vegetarian'), ('non-vegetarian', 'non-vegetarian'), ('vegan', 'vegan')], default='vegetarian', max_length=20)),
                ('drink_preference', models.CharField(choices=[('Hard Drink', 'Hard Drink'), ('Soft Drink', 'Soft Drink'), ('non-alcoholic', 'non-alcoholic')], default='non-alcoholic', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Address',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('street_address', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('state', models.CharField(max_length=100)),
                ('zip_code', models.CharField(max_length=10, validators=[django.core.validators.RegexValidator('^\\d{5}$', 'Zip code must be 5 digits.')])),
            ],
        ),
        migrations.CreateModel(
            name='Drink',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Food',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Goal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('due_date', models.DateField()),
                ('task_per_day', models.PositiveIntegerField(default=1)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
            ],
        ),
        migrations.CreateModel(
            name='Workout',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('completed', models.BooleanField(default=False)),
                ('created_on', models.DateField(auto_now_add=True)),
                ('time_required', models.IntegerField()),
                ('goal', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.goal')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
            ],
        ),
        migrations.CreateModel(
            name='Occupation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('working_hour', models.CharField(choices=[('1', '1'), ('2', '2'), ('3', '3'), ('4', '4'), ('5', '5'), ('6', '6'), ('7', '7'), ('8', '8'), ('9', '9'), ('10', '10'), ('11', '11'), ('12', '12')], default='0', max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
            ],
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('wake_up_time', models.DateTimeField()),
                ('sleep_time', models.DateTimeField()),
                ('workout_time', models.CharField(blank=True, max_length=50, null=True)),
                ('drinks', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.drink')),
                ('food_ate', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.food')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.account')),
                ('workout', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='accounts.workout')),
            ],
        ),
        migrations.AddField(
            model_name='account',
            name='address',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='accounts.address'),
        ),
        migrations.AddField(
            model_name='account',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]