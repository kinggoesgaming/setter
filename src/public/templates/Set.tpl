<div class="btn_black"
    ng-click="back()">
    <i class="icon-left-big"> </i>Back
</div>

<div class="title">SET.tpl {{set.date}}</div>

<div ng-repeat="route in routes">
    <div class="route"
        ng-click="navigateToRoute(gymId, wallId, setId, route.id)">
        <i class="icon-circle" ng-style="{color: route.value}"> </i>{{route.route_name}} {{route.firstname}} {{route.lastname}} {{route.boulder_grade || route.rope_grade}}
    </div>
</div>

<div ng-show="isGymAccount()">
    <div class="btn_black" ng-click="navigateToCreateRoute(gymId, wallId, setId)">
        <i class="icon-plus-squared"> </i> Add Route
    </div>
</div>