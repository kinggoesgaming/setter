
<div class="btn_black small"
    ng-hide="getHomeGymId() || isGymAccount()"
    ng-click="setHomeGym()">

    <div class="right">
        Make Home Gym
    </div>
    <i class="icon-home"> </i>
</div>


<section class="header">

    <h1 class="title"  ng-show="isGymAccount()" >Your Dashboard</h1>
    <h2 >{{gym.name}}</h2>

</section>


<div class="row">

    <div class="mb4  small-12  medium-4 columns">
        <button class="btn--primary  btn--medium  btn--expanded" ng-click="navigateToWalls(gymId)">
            View All Zones
        </button>
    </div>

</div>


<div class="row">

    <div class="small-12 medium">
        <div class="graph  small-12 medium-6 columns">
            <h2 class="fwb">Current Boulder Routes</h2>
        
            <canvas class="chart-bar"
                data="boulderRoutesBarGraph.data"
                labels="boulderRoutesBarGraph.labels"
                options="chartOptions"
                legend="true"
                width="100%"
                height="100%">
            </canvas>
        </div>
    </div>

    <div class="graph  small-12 medium-6 columns">
        <h2 class="fwb">Current Rope Routes</h2>

        <canvas class="chart-bar"
            data="ropeRoutesBarGraph.data"
            labels="ropeRoutesBarGraph.labels"
            options="chartOptions"
            legend="true"
            width="100%"
            height="100%">
        </canvas>
    </div>

</div>