
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import JobCard from '../components/JobCard';
import JobCardVertical from '../components/JobCardVertical';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/images/facebook.png'), color: '#5486E5' },
    { id: 2, title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Accra, Ghana', logo: require('../assets/images/google.png'), color: '#04284A' },
    { id: 3, title: 'Data Scientist', company: 'Microsoft', salary: '$150,000', location: 'Accra, Ghana', logo: require('../assets/images/iphone.png'), color: '#C6E3B7' },
    { id: 4, title: 'UX Designer', company: 'Apple', salary: '$140,000', location: 'Accra, Ghana', logo: require('../assets/images/iphone.png'), color: '#FAD4D7' },
    { id: 1, title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana', logo: require('../assets/images/facebook.png'), color: '#ADC9FA' },
    { id: 2, title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Accra, Ghana', logo: require('../assets/images/google.png'), color: '#FAD6D2' },
    { id: 3, title: 'Data Scientist', company: 'Microsoft', salary: '$150,000', location: 'Accra, Ghana', logo: require('../assets/images/iphone.png'), color: '#BDD6B0' },
    { id: 4, title: 'UX Designer', company: 'Apple', salary: '$140,000', location: 'Accra, Ghana', logo: require('../assets/images/iphone.png'), color: '#3C0681' },
  ];

  const popularJobs = [
    { id: 1, title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US', logo: require('../assets/images/burgur.png') },
    { id: 2, title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US', logo: require('../assets/images/beats.png') },
    { id: 3, title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US', logo: require('../assets/images/facebookjob.png') },
    { id: 4, title: 'Marketing Specialist', company: 'Spotify', salary: '$90,000/y', location: 'New York, US', logo: require('../assets/images/burgur.png') },
    { id: 5, title: 'Software Engineer', company: 'Amazon', salary: '$120,000/y', location: 'Seattle, US', logo: require('../assets/images/facebookjob.png') },
    { id: 6, title: 'Data Analyst', company: 'Netflix', salary: '$110,000/y', location: 'San Francisco, US', logo: require('../assets/images/beats.png') },
    { id: 7, title: 'HR Manager', company: 'Airbnb', salary: '$100,000/y', location: 'San Francisco, US', logo: require('../assets/images/burgur.png') },
    { id: 8, title: 'Project Manager', company: 'Uber', salary: '$115,000/y', location: 'San Francisco, US', logo: require('../assets/images/facebookjob.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.profileName}>{name}</Text>
          <Text style={styles.profileEmail}>{email}</Text>
        </View>
        <TouchableOpacity>
        <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
        <Image source={require('../assets/images/Ellipse 798.png')} style={styles.whitebg} />
        <Image source={require('../assets/images/Ellipse.png')} style={styles.redbg} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={require('../assets/images/search.png')} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search a job or position"
          placeholderTextColor= "gray"
        />
        <TouchableOpacity>
        <Image source={require('../assets/images/sort.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.featuredJobsContainer}>
        {featuredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </ScrollView>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
      <ScrollView style={styles.popularJobsContainer}>
        {popularJobs.map((job, index) => (
          <JobCardVertical key={index} job={job} />
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    backgroundColor: '#FAFAFD', 
    padding: 20
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A3D46',
    fontSize: 24,
    fontFamily:"Poppins",
  },
  profileEmail: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: "Poppins",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
     marginBottom: 20
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginTop: 15,
    marginLeft: 10,
  },
  searchInput: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 50,
    marginLeft: -60,
    backgroundColor: "#F2F2F3",
  },
  filterIcon: {
    width: 50,
        height: 50,
        backgroundColor: "#F2F2F3",
        padding: 10,
        borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3D46',
    fontFamily: "Poppins",
  },
  seeAll: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  featuredJobsContainer: {
    marginBottom: 20,
  },
  popularJobsContainer: {
    flexGrow: 1,
    maxHeight: 400,  
  },

  whitebg:{
    position: "absolute",
    marginLeft: 35,

  },

  redbg:{
    position: "absolute",
    marginLeft: 35,
    top: 5,
    left: 3,

  },
});

export default HomeScreen;