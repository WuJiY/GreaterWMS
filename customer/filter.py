from django_filters import FilterSet
from .models import ListModel

class Filter(FilterSet):
    class Meta:
        model = ListModel
        fields = {
            "id": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range'],
            "customer_name": ['exact', 'iexact', 'contains', 'icontains'],
            "customer_city": ['exact', 'iexact', 'contains', 'icontains'],
            "customer_address": ['exact', 'iexact', 'contains', 'icontains'],
            "customer_contact": ['exact', 'iexact', 'contains', 'icontains'],
            "customer_manager": ['exact', 'iexact', 'contains', 'icontains'],
            "customer_level": ['exact', 'iexact', 'gt', 'gte', 'lt', 'lte', 'isnull', 'in', 'range'],
            "openid": ['exact', 'iexact', 'contains', 'icontains'],
            "is_delete": ['exact', 'iexact'],
            "create_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range'],
            "update_time": ['year', 'month', 'day', 'week_day', 'gt', 'gte', 'lt', 'lte', 'range']
        }

