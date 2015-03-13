<?php
/*
Plugin Name: ZAWiW Genesis Mobile
Plugin URI:
Description: Mobile Version for Genesis Lifestyle Pro Theme
Version: 1.0
Author: Sascha Winkelhofer
Author URI:
License: MIT
*/

// Load Scripts
add_action( 'wp_enqueue_scripts', 'zawiw_genesis_mobile_queue_script' );
add_action( 'wp_enqueue_scripts', 'zawiw_genesis_mobile_queue_stylesheet' );


function zawiw_genesis_mobile_queue_script()
{
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'zawiw_genesis_mobile_script', plugins_url( 'helper.js', __FILE__ ) );
}

function zawiw_genesis_mobile_queue_stylesheet() {
    wp_enqueue_style( 'zawiw_genesis_mobile_style', plugins_url( 'style.css', __FILE__ ) );
    wp_enqueue_style( 'font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' );
}


?>
