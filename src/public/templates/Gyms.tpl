<div class="st--header mb2">
    <section class="row">
        <div class="small-12 columns header">
            <div class="left">
                <button class="[ btn--secondary btn--medium right ] icon-left-big"
                        ng-show="isUserAccount()"
                        ng-click="navigateToUser(getAccountId())" >
                    Your Profile
                </button>
            </div>
        </div>

        <div class="small-12 columns">
            <h1 class="title icon-search">Gyms</h1>

            <label for="searchTerm" name="gymName"></label>

            <input name=""
                    type="search"
                    id="searchTerm"
                    placeholder="Search"
                    ng-model="form.search"
                    ng-change="applySearch()" />
        </div>
    </section>
</div>

<section class="row">
    <div class="small-12 columns header">
        <div ng-repeat="gym in gyms"
                style="cursor: pointer; margin-bottom: 30px;"
                ng-show="gym.show"
                ng-click="navigateToGym(gym.account_id)">

            <div style="height: 100px; width: 200px; display: inline-block; cursor: pointer; float: left; margin-right: 10px;">
                <img style="height: 100%; width: 100%;"
                    ng-src="{{gym.url !== '' && gym.url || 'images/no_gym_image.png'}}">
            </div>

            <div class="gym">
                <h2>{{gym.name}}</h2>
                <h3>{{gym.address}}</h3>
            </div>
        </div>
    </div>
</section>
