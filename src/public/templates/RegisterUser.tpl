
<section class="row">

    <div class="small-12 small-centered large-uncentered large-6 columns">
        
        <div class="saddie  saddie--medium  center  mt5">

        </div>

    </div>

    <div class=" small-12  large-6  columns mtb4">

        <h1 class="icon-edit"> User Registration</h1>

        <label class="label--block  fwb" for="email">Email</label>
        <input ng-model='form.email' placeholder="email" type="email" name="email"/>
        
        <label class="label--block  fwb" for="password">Password</label>
        <input ng-model='form.password' placeholder="password" type="password" name="password"/>

        <label class="label--block  fwb" for="firstName">First Name</label>
        <input ng-model='form.firstname' placeholder="first name" type="text" style="text-transform: capitalize;" name="firstName" />
        
        <label class="label--block  fwb" for="lastName">Last Name</label>
        <input class="mb4" ng-model='form.lastname' placeholder="last name" type="text" style="text-transform: capitalize;" name="lastName" />
        
        <div class="flag  mb4">

            <div class="flag-image  mr0">
                <div class=" fwb  icon-key  icon--big  mb3 " for="email">
                </div>
            </div>

            <div class="flag-body">
                <input  ng-model='form.beta' placeholder="Beta Key" type="text"  />

            </div>
            
        </div>


        <div ng-show="error"
            style="color: red; text-align: center; margin-bottom: 40px;">
            {{error}}!
        </div>

        <button class=" [ btn--primary  btn--big btn--expanded ]  icon-plus"
            ng-click='registerClicked()'>
            Create Account 
        </button>
    </div>
</section>
