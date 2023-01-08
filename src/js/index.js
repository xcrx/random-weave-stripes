/** @jsx React.DOM */
var React = require('react/addons');

var ProjectPicker = require('./project-picker');

React.renderComponent(
    <ProjectPicker />,
    document.getElementById('application')
);
