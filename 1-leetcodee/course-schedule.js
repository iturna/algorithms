/**
 * https://leetcode.com/problems/course-schedule/
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
debugger
var canFinish = function(numCourses, prerequisites) {
  if(prerequisites.length === 0) return true;
    let startCourses = [];
    let map = prerequisites.reduce(function(agg, val) {
        if(!agg[val[0]]) {
          agg[val[0]] = [val[1]];
          startCourses.push(val[0]);
        }
        else agg[val[0]].push(val[1]);

        if(!agg[val[1]]) agg[val[1]] = [];

        return agg;
    }, {});

    let checkControl = {};
    for(let i=0; i<startCourses.length; i++) {
      if(checkControl[startCourses[i]]) continue; //this course already checked
        checkAvaliable(map, startCourses[i], checkControl, 0);
    }

    for(let key in map) {
      if(map[key].length) return false;
    }

    return true;
};

function checkAvaliable(map, prerequisite, checked, count) {
  if(map[prerequisite].length) { //has dependency
    if(checked[prerequisite]) { //that was already checked
      return false;
    } else {
      checked[prerequisite]=1;
    }

    for(let i=0; i<map[prerequisite].length; i++) {
      let ret = checkAvaliable(map, map[prerequisite][i], checked, count);
      if(ret) { //clearing the prerequisite
        map[prerequisite].splice(map[prerequisite].indexOf(map[prerequisite][i]), 1);
        i--;
      } 
    }

    return map[prerequisite].length<=0;
  } else { //dont have dependency
    return true;
  }
}

canFinish(2, [[0,1],[1,0]]);