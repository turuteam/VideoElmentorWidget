( function( $ ) {
	/**
 	 * @param $scope The Widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */ 
	var WidgetVideoHandler = function( $scope, $ ) {
		console.log( $scope );
        console.log('FUCK YEAH~~~');
	};
	
	// Make sure you run this code under Elementor.
	$( window ).on( 'elementor/frontend/init', function() {
		elementorFrontend.hooks.addAction( 'frontend/element_ready/video-widget.default', WidgetVideoHandler );
	} );
} )( jQuery );
