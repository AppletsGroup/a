// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import PublicLayout from './layouts/PublicLayout/PublicLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/stories/{id:Int}" page={StorySharingPage} name="storySharing" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={ScaffoldLayout}>
          <Route path="/admin/stories/new" page={StoryNewStoryPage} name="newStory" />
          <Route path="/admin/stories/{id:Int}/edit" page={StoryEditStoryPage} name="editStory" />
          <Route path="/admin/stories/{id:Int}" page={StoryStoryPage} name="story" />
          <Route path="/admin/stories" page={StoryStoriesPage} name="stories" />
          <Route path="/admin/explore" page={ExplorePage} name="explore" />
          <Route path="/admin/publications/new" page={PublicationNewPublicationPage} name="newPublication" />
          <Route path="/admin/publications/{id:Int}/edit" page={PublicationEditPublicationPage} name="editPublication" />
          <Route path="/admin/publications/{id:Int}" page={PublicationPublicationPage} name="publication" />
          <Route path="/admin/publications" page={PublicationPublicationsPage} name="publications" />
        </Set>
      </Private>
      <Set wrap={PublicLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
