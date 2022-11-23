from django.db import models
from django.utils import timezone

# Create your models here.
class Customer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    cust_number = models.IntegerField(blank=False, null=False)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)
    email = models.EmailField(max_length=200)
    cell_phone = models.CharField(max_length=50)
    created_date = models.DateTimeField(
        default=timezone.now)
    updated_date = models.DateTimeField(auto_now_add=True)

    def created(self):
        self.created_date = timezone.now()
        self.save()

    def updated(self):
        self.updated_date = timezone.now()
        self.save()

    def __str__(self):
        return str(self.cust_number)


class Puppy(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='puppy')
    dog_name = models.CharField(max_length=50)
    dog_size = models.CharField(max_length=50)
    dog_type = models.CharField(max_length=100)
    dog_notes = models.CharField(max_length=200)

    def cust_number(self):
        return self.customer.cust_number


class Training(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='training')
    dog_name = models.ForeignKey(Puppy, on_delete=models.CASCADE, related_name='training')
    training_date = models.DateField(default=timezone.now)
    training_notes = models.CharField(max_length=200)


    def created(self):
        self.training_date = timezone.now()
        self.save()

    def __str__(self):
        return str(self.customer)

    def cust_number(self):
        return self.customer.cust_number


