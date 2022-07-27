console.log('screening cvs');
const data = [
    {
        name: 'ali', 
        age: 16,
        city: 'abc',
        languages: 'python',
        frameWork: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'ahmad', 
        age: 16,
        city: 'cde',
        languages: 'cpp',
        frameWork: 'Django',
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },
    {
        name: 'ahsan', 
        age: 26,
        city: 'dfg',
        languages: 'python',
        frameWork: 'flask',
        image: 'https://randomuser.me/api/portraits/men/70.jpg'
    },
    {
        name: 'mehwish', 
        age: 20,
        city: 'fffs',
        languages: 'python',
        frameWork: 'cv2',
        image: 'https://randomuser.me/api/portraits/women/75.jpg'
    },
    {
        name: 'rida', 
        age: 26,
        city: 'abcqw',
        languages: 'python',
        frameWork: 'tkinter',
        image: 'https://randomuser.me/api/portraits/women/51.jpg'
    }
]


// CV ITERATOR  
function cvIterator(profiles){
    let nextIndex = 0;
    return{
        next: function(){
            if(nextIndex< profiles.length){
                return{
                    value : profiles[nextIndex++],
                    done: false
                }
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

const candidates = cvIterator(data);
nextCV();
// button listener for next bu

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextCV); 
function nextCV(){
    const currentCandidate = candidates.next().value;

    let imageCV = document.getElementById('imageCV');
    let profile = document.getElementById('profile');

    if(currentCandidate!=undefined){
    imageCV.innerHTML = `<img src='${currentCandidate.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item active" aria-current="true">Name is ${currentCandidate.name}</li>
    <li class="list-group-item">Age is ${currentCandidate.age}</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily WOrks on  ${currentCandidate.languages}</li>
    <li class="list-group-item">with FrameWOrk ${currentCandidate.frameWork}</li>
  </ul>`;}
  else{
    alert("End of candidate applications");
    window.location.reload();
  }
}