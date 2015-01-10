<div class='st--header'>
    <div class="mb2">

        <section class="row">

            <div class="small-12 columns header">

                <h1 class="icon-group">
                    Manage Setters
                </h1>

                <button class="[ btn--primary  btn--medium ] icon-pencil"
                        ng-click="navigateToAddSetter(gymId)">
                    Add Setter
                </button>

            </div>

        </section>
    </div>
</div>

<section class="row mtb4">

    <div class="small-12 columns mb4">

        <div class="row">

            <div class="small-12 columns">

                <h2 class="fwb">Your Setters</h2>

            </div>

        </div>

       <section class="row" data-equalizer >

           <div data-equalizer-watch class="ptb2 setter-profile  small-12 columns medium-6 large-4" data-ui-component="setter-profile" ng-repeat="setter in setters" ng-hide="setter.hide"  >

            <div class="flag">

                <div class="flag-image pr2">
                    <div class="avatar setter-profile-avatar" ng-click="navigateToUser(setter.account_id)">
                        <img  class="avatar-image" ng-src="{{setter.url !== '' && setter.url || 'images/no_image.png'}}"/>
                    </div>
                </div>

                <ul class="flag-body">

                    <li >

                    <h2 class="h3  fwb mb1" data-ui-component="setter-info-name">
                     {{setter.firstname}} {{setter.lastname}}
                    </h2>

                    </li>

                    <h4 class="mb0 rating rating--medium"
                        ng-repeat="star in setter.stars">
                        <i ng-class="{'icon-star': isFilled(star, setter), 'icon-star-empty': !isFilled(star, setter)}"> </i>
                    </h4>
                    <span class="txt--micro display--block">({{setter.rating}}) Ratings</span>

                </ul>

            </div>

            <ul class="list--dotted">

                <li>
                    <h3 class="h4 fwb mb0" >
                    Total Routes Set
                    </h3>
                </li>

                <li>
                  <span class="txtc2 left">Bouldering</span>
                  <a href="#" class="right"data-ui-component="setter-info-ropeRoutesTotal">
                    <strong>{{setter.num_boulder_routes}}</strong>
                  </a></li>

                  <li>
                  <span class="txtc2 left">Top Rope</span>
                  <a href="#" class="right" data-ui-component="setter-info-ropeRoutesTotal">
                    <strong>{{setter.num_rope_routes}}</strong>
                  </a></li>

                  <li>
                  <span class="txtc2 left">Lead</span>
                  <a href="#" class="right" data-ui-component="setter-info-boulderProbTotal">
                    <strong>{{setter.num_rope_routes}}</strong>
                  </a>
                </li>

            </ul>

            <hr class="hr--light mt0 mb3"/>

            </div>

       </section>
    </div>
</section>
