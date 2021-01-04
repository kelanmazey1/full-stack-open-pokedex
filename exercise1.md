CI Setup For Fictional Python Project

Linting - PyLint comes already integrated to the VS Code Python extension, so already popular and well supported

Testing - Robot, has a large ecosystem of extensions and is actively supported

Building - PyBuilder, couldn't find another alternative that looked suitable, but adds functionality to create scripts and run tests on build.

Use CircleCI for continous integration, lots of intergrations with popular services Heroku, Slack, Node etc. has multiple hosting options, server or cloud. Provides a range of different compute options for added scalability if the project ever grew to a size that warranted it. Also offers a range of different VMs ie. Docker, Linux, MacOS, AWS etc.

I believe a project would be best set up on the cloud, it is initially free so when first configuring the pipeline and deploying the app no cost would be incured. It also requries less working hours to configure than a local server and with a team of only 6 this would be vital in getting the project deployed. A cloud solution would also allow the app to scale to a very large size before becoming less cost efficient than local servers, and most applications won't require the level of config that a local hosting solution provides.