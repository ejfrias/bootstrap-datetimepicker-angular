angular.module('bootstrap-datetimepicker-angular', [])

.component('dateTimePicker', {
	bindings: {
		model: '@ngModel',
        placeholder: '@'
	},
	template: [
		'<div class="input-group date">',
			'<input type="text" class="form-control" placeholder="{{$ctrl.placeholder || \'Pick a date\'}}" />',
			'<span class="input-group-addon clickable">',
				'<i class="glyphicon glyphicon-calendar"></i>',
			'</span>',
		'</div>'
	].join(''),
	controller( $scope, $element, $attrs ){
		var $this = this;
		var picker = $('div.date', $element);
		var input = $('input', $element);
		
		picker.datetimepicker({
			useCurrent: false, //Important! See issue #1075
			allowInputToggle: true,
			format: $attrs.format || 'YYYY-MM-DD'
		});
		
		if( $attrs.link && $attrs.linktype ){
			picker.on('dp.change', function(e){
				var el = $('div.date', '#'+$attrs.link).data("DateTimePicker");
				
				if( $attrs.linktype == 'min' ){
					el.minDate( e.date );
				}
				else if( $attrs.linktype == 'max' ){
					el.maxDate( e.date );
				}
			});
		}
		
		input.on('blur', function(e){
			var parts = $this.model.split('.');
			
			if( parts.length > 1 ){
				$scope.$parent[parts[0]][parts[1]] = input.val();
			}
			else {
				$scope.$parent[parts[0]] = input.val();
			}
		});
	}
})
