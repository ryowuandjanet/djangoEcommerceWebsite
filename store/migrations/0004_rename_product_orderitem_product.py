# Generated by Django 4.2.2 on 2023-07-27 13:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0003_rename_orederitem_orderitem'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orderitem',
            old_name='Product',
            new_name='product',
        ),
    ]
