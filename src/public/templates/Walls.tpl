<div class="st--header pb4">
    <section class="row  small-collapse  large-uncollapse">
        <div class="header">
            <div class="clearfix  display--block">
                <button ng-hide="isGymAccount()"
                        class="[ btn--secondary btn--medium left  ] icon-left-big  left "
                        ng-click="navigateToGym(gymId)" >
                        Gym
                </button>
            </div>
            <h1 ng-show="isGymAccount()" class="icon-th-list"> <img src="images/icon--wrench.svg" alt="">  Manage Your Zones</h1>
            <h1 ng-hide="isGymAccount()" class="icon-th-list"> Gym Zones</h1>
        </div>
    </section>

    <section class="row">
        <div class="small-12 columns">

            <div class="media--fl">
                <div>
                    <label for="searchTerm" class="icon--label icon-search inline"></label>
                </div>

                <div>
                    <input name=""
                            type="search"
                            id="searchTerm"
                            ng-model="form.filter"
                            ng-change="applyFilter()"
                            placeholder="Search by Wall Name">
                </div>
            </div>

            <div class="media--fl" ng-show="isGymAccount()">
                <button type="submit"
                            alt="Add New Zone"
                            class="btn--primary icon-plus btn--medium "
                            ng-click="addClicked()">
                    Add Zone
                </button>

                <div>
                    <input type="text"
                            name="name"
                            id="wallName"
                            placeholder="New zone Name"
                            ng-model="form.wallName"/>
                </div>
            </div>
        </div>
    </section>
</div>


<section class="row  small-collapse  large-uncollapse">

    <div class="small-12 columns">

        <ul class="list--tableStyle  list--navElem"  data-ui-component="gymZoneList">
            <li class="ptb2  fwb" ng-repeat="wall in walls"
                    ng-click="navigateToWall(gymId, wall.id)"
                    ng-hide="wall.hide">

                    {{wall.name}}
                   <span class="round  label success " ng-show="isUserAccount() && wall.new_count">{{wall.new_count}}</span>
                    <i class="icon-right-big right"> </i>


            </li>

        </ul>

    </div>

</section>
