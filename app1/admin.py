from django.contrib import admin
from .models import Rating, User, Message, Spot, spot_spottype_detail, SpotType


Rating._meta.get_field('spot').verbose_name = '景点编号'
Rating._meta.get_field('user').verbose_name = '用户编号'
Rating._meta.get_field('rating').verbose_name = '评分'

Spot._meta.get_field('spot_name').verbose_name = '景点名称'
Spot._meta.get_field('spot_class').verbose_name = '景点等级'
Spot._meta.get_field('spot_booking').verbose_name = '景点是否接受预约'

SpotType._meta.get_field('spot_type_name').verbose_name = '景点类型名称'
SpotType._meta.get_field('spot_type_id').verbose_name = '景点类型编号'

#spot_spottype_detail._meta.get_field('id').verbose_name = '景点名称'
spot_spottype_detail._meta.get_field('spot_id').verbose_name = '景点名称'
spot_spottype_detail._meta.get_field('spot_type_id').verbose_name = '景点类型'


admin.site.site_header = '个性化出行方案规划及可视化系统后台'
admin.site.site_title = '个性化出行方案规划及可视化系统后台'
admin.site.index_title = '个性化出行方案规划及可视化系统后台'
# Register your models here.
admin.site.register(Rating)
admin.site.register(User)
admin.site.register(Message)
#admin.site.register(SpotType)
#admin.site.register(spot_spottype_detail)
#admin.site.register(Spot)

@admin.register(Spot)
class SpotAdmin(admin.ModelAdmin):
    list_display = ('id', 'spot_name', 'spot_class', )
    list_per_page = 10
    ordering = ('id',)
    # 操作项功能显示位置设置，两个都为True则顶部和底部都显示
    actions_on_top =True
    actions_on_bottom = True
    actions_selection_counter = True
    empty_value_display = '未知'
    search_fields = ['spot_name', 'id', 'spot_class']

@admin.register(SpotType)
class SpotTypeAdmin(admin.ModelAdmin):
    list_display = ('spot_type_name', 'spot_type_id', )
    list_per_page = 10
    ordering = ('spot_type_id',)
    # 操作项功能显示位置设置，两个都为True则顶部和底部都显示
    actions_on_top = True
    actions_on_bottom = True
    actions_selection_counter = True
    empty_value_display = '未知'
    #search_fields = ['spot_name', 'id', 'spot_class']

@admin.register(spot_spottype_detail)
class Spot_spottype_detail_Admin(admin.ModelAdmin):
    # listdisplay设置要显示在列表中的字段（id字段是Django模型的默认主键）
    list_display = ('id', 'spot_id', 'spot_type_id', )

    # list_per_page设置每页显示多少条记录，默认是100条
    list_per_page = 10

    # ordering设置默认排序字段，负号表示降序排序
    ordering = ('spot_id',)
    # 操作项功能显示位置设置，两个都为True则顶部和底部都显示
    actions_on_top =True
    actions_on_bottom = True
    # 操作项功能显示选中项的数目
    actions_selection_counter = True
    # 字段为空值显示的内容
    empty_value_display = '未知'
    # 搜索功能及能实现搜索的字段
    search_fields = ['spot_id']

