import type { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sourav Mukherjee',
    role: 'Realtor',
    image: 'https://ravmoyaanrealty.com/images/team/sir.png',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 2,
    name: 'Ankita Ghosh',
    role: 'Team Member',
    image: 'https://ravmoyaanrealty.com/images/team/ankita1.png',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 3,
    name: 'Vishwendra Singh Yadav',
    role: 'Team Member',
    image: 'https://ravmoyaanrealty.com/images/team/vish.png',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
  {
    id: 4,
    name: 'Tapas Nayak',
    role: 'Team Member',
    image: 'https://ravmoyaanrealty.com/images/team/tapas.png',
    socials: {
      facebook: '#',
      twitter: '#',
      instagram: '#',
    },
  },
];

const Team = () => {
  return (
    <section className="py-20 pt-10 bg-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent"></div>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 bg-gold-600/10 border border-gold-600/20 rounded-full text-gold-600 text-xs font-semibold uppercase tracking-widest mb-3 backdrop-blur-sm">
            Meet Our
          </div>
          <h2 className="text-[2.5rem] font-bold text-white capitalize">Team-Mates</h2>
          <p className="text-white/40 text-base mt-3 max-w-2xl mx-auto">Dedicated professionals committed to your real estate success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="aos-init opacity-0 translate-y-[30px] transition-all duration-700 ease-out"
              style={{ transitionDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-dark-300 border border-white/5 group transition-all duration-500 hover:border-gold-600/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                <div className="relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-88 sm:h-80 md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-500/95 via-dark-500/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-gold-600 text-xs sm:text-sm font-medium">{member.role}</p>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 flex flex-col gap-1.5 sm:gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <a href={member.socials.facebook} className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="facebook"><i className="fab fa-facebook"></i></a>
                    <a href={member.socials.twitter} className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="twitter"><i className="fab fa-twitter"></i></a>
                    <a href={member.socials.instagram} className="w-8 h-8 sm:w-9 sm:h-9 bg-dark-500/80 backdrop-blur-sm text-white rounded-lg sm:rounded-xl flex items-center justify-center text-xs sm:text-sm transition-all duration-300 hover:bg-gold-600 hover:text-dark-500" title="instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="p-3 sm:p-4 border-t border-white/5">
                  <a href="#" className="text-gold-600 text-xs sm:text-sm font-semibold transition-all duration-300 hover:text-white hover:gap-2 inline-flex items-center gap-1">
                    View Profile <i className="fa fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
