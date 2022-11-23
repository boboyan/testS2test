from django.contrib import admin
from .models import Customer, Puppy, Training

class CustomerList(admin.ModelAdmin):
    list_display = ('cust_number', 'name', 'city', 'cell_phone')
    list_filter = ('cust_number', 'name', 'city')
    search_fields = ('cust_number', 'name')
    ordering = ['cust_number']


class PuppyList(admin.ModelAdmin):
    list_display = ('customer', 'dog_name', 'dog_notes')
    list_filter = ('customer', 'dog_type')
    search_fields = ('customer', 'dog_type')
    ordering = ['customer']


class TrainingList(admin.ModelAdmin):
    list_display = ('customer', 'dog_name', 'training_date')
    list_filter = ('customer', 'dog_name')
    search_fields = ('customer', 'dog_name')
    ordering = ['customer']


admin.site.register(Customer, CustomerList)
admin.site.register(Puppy, PuppyList)
admin.site.register(Training, TrainingList)
