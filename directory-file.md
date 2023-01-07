project {
  assets {
    images {
      many files
    }
  }
  components {
    Button {
      many button.js comps.
    }
    LoadingScreen.js => screens/Loading
    Markers.js => screens/home
    MapView.js => screens/home
    ResourceList.js => screens/Resources
    Resources.js => screens/Resources 
    ButtonContainer.js => screens/Home
    Modal {
      Dialogue.js => screens/Home
      LoginRegister.js => screens/Home // screens/Profile
      Resources.js => => screens/Resources // components/ResourceList
    }

  }
  routes {
    homestack {
      hambuger menu {
        login/logout {
          home // login
        }
        reports
        resources {
          resource index
        }
        settings
        user profile
      }
      home screen
      reportstack {

      }
      resourceIndex {
        resource
      }
      Profile {
        user profile
        Reports
        Settings // mock settings for MVD
      }
    }
  }
  screens {
    Loading.js
    Home.js 
    Resources.js
    Profile.js
    Login.js
    Register.js
    Reports.js
    ReportForm.js // ReportEditForm.js // AdminEditForm.js
    Hamburger.js
  }
  shared {
    
  }

  styles {

  }

  app.js


  node-modules/
  .env
  .gitignore
  babel.config.js
  pack.json
  package-lock.json
  planing.md
  README.md
}