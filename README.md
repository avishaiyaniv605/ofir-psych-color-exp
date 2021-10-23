# shachar-colors

# TODO:

  - [x] Fix column of hintsFollowed (it's actually "did follow hint?") to be `true` iff the next pressed key (following a hint) was the same as the direction of the hint.
  - [ ] Long key presses should be function as a single press (hue and count).
  - [ ] Fix hint of correct answer to cover only one possible answer. it currently can cover two possible answers.
  - [ ] Don't count hint punishment time in reaction time (rt column).
  - [x] Change color boxes to be black while hint punishment timer is running.
  - [ ] slide bar feedback (training part 2) - shouldn't be clickable
  - [ ] slide bar feedback (training part 2) - add a marking for mid-point.
  - [x] align arrow keys with "choose" button.
  - [ ] When second practice ends it shows in the background the third practice instructions, but it shouldn't
  - [ ] Add pictures to instructions: https://docs.google.com/document/d/15x88VuQz7t4RVQQojN6XUVNLZ4WjOd49qBDrUSQrRPs/edit?usp=sharing_eip_dm&ts=61603212
  - [x] בזמן הטרייל הראשון הראשון יופיע חלון:

מעל המקש הימני: לחצו על המקש הימני שלוש פעמים. שימו לב כיצד הצבע בריבוע האמצעי הופך לכהה יותר עם כל לחיצה. 

כעת לחצו לחיצה ארוכה וראו כיצד הצבע מתכהה. 

מעל המקש השמאלי: חזרו על אותן הפעולות עם המקש השמאלי, וראו כיצד הצבע מתבהר. 

כעת נסו למצוא את נקודת האמצע. השתמשו בחצים כפי שעשיתם עד כה. כשאתם סבורים שמצאתם את נקודת האמצע, לחצו על כפתור "בחר" באמצעות העכבר. לאחר שתלחצו על כפתור זה, יופיעו בזה אחר זה מספר רצפים נוספים. התנסו בהם באופן דומה. 
  - [ ] מקרא
חץ ימינה - רוב הנבדקים במדגם עבר המשיכו עוד ימינה בנקודה זו, ובחרו בצבע כהה יותר. 
חץ שמאלה - רוב הנבדקים במדגם עבר המשיכו עוד ימינה שמאלה בנקודה זו, ובחרו בצבע בהיר יותר. 
סימן וי - רוב הנבדקים במדגם עבר בחרו בצבע המופיע כעת כתשובתם הסופית. 

## Shacharit's TODO
  - [x] Add a condition that half of the experiments in exp. phase 1 won't get the automatic hint after 7 arrow-clicks.
  - [x] Change exp. phase 1 to show hint after 3-7 clicks -> randomize each trial (choose)
