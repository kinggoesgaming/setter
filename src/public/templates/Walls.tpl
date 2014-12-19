
<section class="header row small-collapse">
    <div class="small-12 columns">


    <h1 ng-show="isGymAccount()">Manage Your Zones</h1>
    <span ng-hide="isGymAccount()">Walls</span>
    </div>
</section>

<section class="row">
  <div class="small-12 columns">
              <div class="mb1">
                <!--Search Box for Walls-->
  <div class="media--fl">
  <div>
    <label for="searchTerm" class="icon--label icon--search inline"></label>
  </div>
    <div> 
    <input name="" type="search" id="searchTerm" placeholder="Search by name, color, setter, route grades, etc.">
    </div>
  </div>   
                <!--End Search Box for routes-->

  <div class="media--fl">
    <button type="submit" alt="Add New Zone" class="btn--primary btn--medium "   ng-click="addClicked()">Add Zone
    </button>
  <div>
    <input type="text" name="name" id="wallName" placeholder="New zone Name" ng-model="form.wallName"/>
  </div>
  </div>
  </div>
</section>

<div class="row  small-collapse ">
  <div class="small-12  columns"  data-ui-component="searchZoneForm">
    <ul class="list--tableStyle"  data-ui-component="gymZoneList">
        <li class="ptb2  fwb" ng-repeat="wall in walls">
            <a class="wall"
                ng-click="navigateToWall(gymId, wall.id)">
                {{wall.name}} <i class="icon-right-big right"> </i>
            </a>
        </li>
    </ul>
  </div>
