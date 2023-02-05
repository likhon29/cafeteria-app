import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Calendar } from 'react-native-calendars'
import { TouchableOpacity } from 'react-native'
import TimeSlot from '../../components/TimeSlot/TimeSlot'
import { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
const Reservation = () => {
  var cdate = new Date().getDate()

  var cmonth = new Date().getMonth() + 1

  var cyear = new Date().getFullYear()

  var finalObject = cyear + '-0' + cmonth + '-0' + cdate
  const [date, setDate] = useState(finalObject)
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ padding: 30 }}>
      <Text style={{ color: 'green', fontSize: 25 }}>
        Cafeteria Reservation
      </Text>
      <View style={{ paddingVertical: 20 }}>
        <Calendar
          style={{
            borderWidth: 1,
            borderColor: 'green',
            borderRadius: 10,
            height: 350,
            // backgroundColor: 'green',
          }}
          onDayPress={(day) => {
            setDate(day.dateString)
          }}
          markedDates={{
            '2012-05-16': {
              selected: true,
              marked: true,
              selectedColor: 'blue',
            },
            '2012-05-17': { marked: true },
            '2012-05-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
            '2012-05-19': { disabled: true, disableTouchEvent: true },
          }}
        />
      </View>
      <View>
        <Text style={{ color: 'green', fontSize: 20, marginVertical: 10 }}>
          Available slots:{date}
        </Text>
        <TimeSlot date={date} slot='Morning' time="10am-12pm"></TimeSlot>
        <TimeSlot date={date} slot='Lunch' time="1pm-4pm"></TimeSlot>
        <TimeSlot date={date} slot='Evening' time="5pm-10pm"></TimeSlot>
      </View>
    </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Reservation

const styles = StyleSheet.create({})
