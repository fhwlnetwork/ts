webpackJsonp(["app/js/testpaper-manage/questions/index"],{0:function(e,t){e.exports=jQuery},"1e0cf618bc778b8ab554":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("b334fd7e4c5a19234db2"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),o=a("71e1df85d5928925f4b1"),c=function(){function e(t,a){n(this,e),this.$form=t,this.$modal=a,this.initEvent()}return i(e,[{key:"initEvent",value:function(){var e=this;this.$form.on("click",'[data-role="item-delete-btn"]',function(t){return e.deleteQuestion(t)}),this.$form.on("click",'[data-role="replace-item"]',function(t){return e.replaceQuestion(t)}),this.$form.on("click",'[data-role="preview-btn"]',function(t){return e.previewQuestion(t)}),this.$form.on("click",'[data-role="batch-delete-btn"]',function(t){return e.batchDelete(t)}),this.initSortList()}},{key:"initSortList",value:function(){var e=this;this.$form.find("tbody").sortable({containerPath:"> tr",containerSelector:"tbody",itemSelector:"tr.is-question",placeholder:'<tr class="placeholder"/>',exclude:".notMoveHandle",onDrop:function(t,a,n){if(n(t,a),t.hasClass("have-sub-questions")){var i=t.parents("tbody");i.find("tr.is-question").each(function(){var e=$(this);i.find("[data-parent-id="+e.data("id")+"]").detach().insertAfter(e)})}e.refreshSeqs()}})}},{key:"replaceQuestion",value:function(e){var t=this,a=$(e.currentTarget),n=[],i=this.$form.find("tbody:visible");i.find('[name="questionIds[]"]').each(function(){n.push($(this).val())}),this.$modal.data("manager",this).modal(),$.get(a.data("url"),{excludeIds:n.join(","),type:i.data("type")},function(e){t.$modal.html(e)})}},{key:"deleteQuestion",value:function(e){e.stopPropagation();var t=$(e.currentTarget),a=t.closest("tr").data("id");t.closest("tbody").find('[data-parent-id="'+a+'"]').remove(),t.closest("tr").remove(),(0,o.questionSubjectiveRemask)(this.$form),this.refreshSeqs()}},{key:"batchDelete",value:function(e){if(0==this.$form.find('[data-role="batch-item"]:checked').length){var t=this.$form.find(".js-help-redmine");t?(t.text(Translator.trans("activity.testpaper_manage.question_required_error_hint")).show(),setTimeout(function(){t.slideUp()},3e3)):(0,s.default)("danger",Translator.trans("activity.testpaper_manage.question_required_error_hint"))}var a=this;this.$form.find('[data-role="batch-item"]:checked').each(function(e,t){var n=$(this).val();"material"==$(this).closest("tr").data("type")&&a.$form.find('[data-parent-id="'+n+'"]').remove(),$(this).closest("tr").remove()}),(0,o.questionSubjectiveRemask)(this.$form)}},{key:"previewQuestion",value:function(e){e.preventDefault(),window.open($(e.currentTarget).data("url"),"_blank","directories=0,height=580,width=820,scrollbars=1,toolbar=0,status=0,menubar=0,location=0")}},{key:"refreshSeqs",value:function(){var e=1;this.$form.find("tbody tr").each(function(){var t=$(this);t.hasClass("have-sub-questions")||(t.find("td.seq").html(e),e++)}),this.$form.find('[name="questionLength"]').val(e-1>0?e-1:null)}}]),e}();t.default=c},"65c0e24ccad86ee24949":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a("b334fd7e4c5a19234db2"),s=function(e){return e&&e.__esModule?e:{default:e}}(r),o=function(){function e(t){n(this,e),this.$element=t,this.$button=this.$element.find('[data-role="pick-item"]'),this.$typeNav=this.$element.find("#testpaper-question-nav"),this.$modal=$("#testpaper-confirm-modal"),this.currentType=this.$typeNav.find(".active").children().data("type"),this.questions=[],this._initEvent()}return i(e,[{key:"_initEvent",value:function(){var e=this;this.$button.on("click",function(t){return e._showPickerModal(t)}),this.$typeNav.on("click","li",function(t){return e._changeNav(t)}),this.$element.on("click",".js-request-save",function(t){return e._confirmSave(t)}),this.$modal.on("click",".js-confirm-submit",function(t){return e._submitSave(t)})}},{key:"_showPickerModal",value:function(e){var t=[];$('[data-type="'+this.currentType+'"]').find('[name="questionIds[]"]').each(function(){t.push($(this).val())});var a=$("#modal").modal();a.data("manager",this),$.get(this.$button.data("url"),{excludeIds:t.join(","),type:this.currentType},function(e){a.html(e)})}},{key:"_changeNav",value:function(e){var t=$(e.currentTarget),a=t.children().data("type");this.currentType=a,this.$typeNav.find("li").removeClass("active"),t.addClass("active"),this.$element.find('[data-role="question-body"]').addClass("hide"),this.$element.find("#testpaper-items-"+a).removeClass("hide"),this.$element.find('[data-role="batch-select"]').prop("checked",!1),this.$element.find('[data-role="batch-item"]').prop("checked",!1)}},{key:"_confirmSave",value:function(e){if(this._validateScore()){if($('[name="passedScore"]').length>0){var t=$(".passedScoreDiv").siblings(".help-block").html();if(""!=$.trim(t))return}var a=this._calTestpaperStats();if($('[name="passedScore"]').length>0){var n=$('input[name="passedScore"]').val();if(n>a.total.score)return void(0,s.default)("danger",Translator.trans("activity.testpaper_manage.setting_pass_score_error_hint",{passedScore:n,totalScore:a.total.score}));if(!/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(n))return(0,s.default)("danger",Translator.trans("activity.testpaper_manage.pass_score_error_hint")),void $(this).focus()}var i="";$.each(a,function(e,t){var a="<tr>";a+="<td>"+t.name+"</td>",a+="<td>"+t.count+"</td>",a+="<td>"+t.score.toFixed(1)+"</td>",a+="</tr>",i+=a}),this.$modal.find(".detail-tbody").html(i),this.$modal.modal("show")}}},{key:"_validateScore",value:function(){var e=!0;return 0==this.$element.find('[name="scores[]"]').length&&((0,s.default)("danger",Translator.trans("activity.testpaper_manage.question_required_error_hint")),e=!1),this.$element.find('input[type="text"][name="scores[]"]').each(function(){var t=$(this).val();"0"==t&&((0,s.default)("danger",Translator.trans("activity.testpaper_manage.question_score_empty_hint")),e=!1),/^(([1-9]{1}\d{0,2})|([0]{1}))(\.(\d){1})?$/.test(t)||((0,s.default)("danger",Translator.trans("activity.testpaper_manage.question_score_error_hint")),$(this).focus(),e=!1)}),e}},{key:"_calTestpaperStats",value:function(){var e={},t=this;this.$typeNav.find("li").each(function(){var a=$(this).find("a").data("type"),n=$(this).find("a").data("name");e[a]={name:n,count:0,score:0,missScore:0},t.$element.find("#testpaper-items-"+a).find('[name="scores[]"]').each(function(){var n=$(this).closest("tr").data("type"),i="material"==n?0:parseFloat($(this).val()),r={};"material"!=n&&e[a].count++,e[a].score+=i,e[a].missScore=parseFloat($(this).data("miss-score"));var s=$(this).closest("tr").data("id");r.id=s,r.score=i,r.missScore=parseFloat($(this).data("miss-score")),r.type=a,t.questions.push(r)})});var a={name:Translator.trans("activity.testpaper_manage.question_total_score"),count:0,score:0};return $.each(e,function(e,t){a.count+=t.count,a.score+=t.score}),e.total=a,e}},{key:"_submitSave",value:function(e){var t=0,a=$(e.currentTarget);$('input[name="passedScore"]:visible').length>0&&(t=$('input[name="passedScore"]').val()),a.button("loading").addClass("disabled"),$.post(this.$element.attr("action"),{questions:this.questions,passedScore:t},function(e){e.goto&&(window.location.href=e.goto)})}}]),e}();t.default=o},"71e1df85d5928925f4b1":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.questionSubjectiveRemask=function(e){var t=!1,a="",n=$(".js-subjective-remask");if(e.find("tbody tr").each(function(){var e=$(this).data("type");"essay"==e&&(t=!0)}),t||0==e.find("tbody tr").length)return void n.html("");a="homework"==n.data("type")?Translator.trans("activity.homework_manage.objective_question_hint"):Translator.trans("activity.homework_manage.pass_objective_question_hint"),n.html(a).removeClass("hidden")}},ce77bc9ba67272358705:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=a("63fff8fb24f3bd1f61cd");n(i);a("b3c50df5d8bf6315aeba");var r=a("de585ca0d3c2d0205c51"),s=n(r),o=a("1e0cf618bc778b8ab554"),c=n(o),u=a("65c0e24ccad86ee24949"),d=n(u),l=$("#testpaper-items-manager");new c.default(l,$("#modal")),new d.default(l),new s.default(l)}},["ce77bc9ba67272358705"]);