<section class="row small-collapse">
    <div class="header">
        <button class="[ btn--secondary  btn--medium ] mb2 icon-left-big display--block"
                ng-click="back()" >
            Back
        </button>
    </div>
</section>

<section class="row">
    <div class="small-12 columns header">
        <h1 class="icon-group"> Add Setters</h1>
    </div>
</section>

<section class="row mb4">
    <div class="small-12 columns">

        <div class="media--fl">
            <div>
                <label for="searchTerm" class="icon--label icon--search inline"></label>
            </div>

            <div>
                <input name=""
                    type="search"
                    id="searchTerm"
                    ng-model="form.filter"
                    ng-change="applyFilter()"
                    placeholder="filter by setter name">
            </div>
        </div>

        <h2 class="fwb">Users</h2>

        <div ng-repeat="user in users" ng-hide="user.hide" class="mb2" style="display: inline-block; width: 300px;">
            <div style="width: 60px; height: 60px; display: inline-block; cursor: pointer; text-align: center; font-size: 16px;"
                ng-click="navigateToUser(user.account_id)">
            <img ng-src="{{user.url !== '' && user.url || 'images/no_image.png'}}"
                style="height: 100%; width: 100%; border-radius: 50%; border: 2px solid #ed6d56;">
            </div>
            <h3 style="display: inline-block;">
                {{user.firstname}} {{user.lastname}}
                <i class="icon-plus" style="cursor: pointer;" ng-click="addSetterClicked(user)"> </i>
            </h3>
        </div>
    </div>
</section>
