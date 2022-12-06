from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import date
# Create your models here.
class AppUser(AbstractUser):
    first_name = models.CharField(max_length=250, null=False, default='unkown')
    middle_init = models.CharField(max_length=250, null=False, default='unkown')
    last_name = models.CharField(max_length=250, null=False, default='unkown')
    date_of_birth=models.DateField(null=False, default=date.today())
    email = models.EmailField(
        verbose_name='email address',
        max_length= 255,
        unique=True,
    )
    USERNAME_FIELD= 'email'
    REQUIRED_FIELDS= []